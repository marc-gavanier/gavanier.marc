import type { Dirent } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

export type RouteNode = {
  name: string;
  path: string;
  children: RouteNode[];
};

const PARENTHESIS_PATH_PARAM: RegExp = /\/\(.+\)/;

const alphaOrder = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);

const resolveMetadataTitle = async (metadataPath: string, fallback: string) => {
  try {
    return (await import(`@/app/${metadataPath}`).then(({ metadata }) => metadata))?.title.split(' |')[0] ?? fallback;
  } catch {
    console.log(`Unable to load metadata for ${metadataPath}, using fallback`);
    return fallback;
  }
};

const dirContent = (fullPath: string) => fs.readdir(fullPath, { withFileTypes: true });

const onlyValidDirectories = (entry: Dirent) => entry.isDirectory() && !entry.name.startsWith('_');

const isSpecialDirectory = (entry: Dirent) => entry.name.startsWith('(');

const getMetadataPath = (fullPath: string, entry: Dirent) =>
  path.relative(path.join(process.cwd(), 'src/app'), path.join(fullPath, entry.name, 'metadata.ts'));

const toRouteNode =
  (basePath: string, fullPath: string) =>
  async (entry: Dirent): Promise<RouteNode[]> => {
    const routePath = path.join(basePath, entry.name);

    return isSpecialDirectory(entry)
      ? routerNodes(path.join(fullPath, entry.name), routePath)
      : [
          {
            path: `/${routePath}`.replace(PARENTHESIS_PATH_PARAM, ''),
            name: await resolveMetadataTitle(getMetadataPath(fullPath, entry), entry.name),
            children: await routerNodes(path.join(fullPath, entry.name), routePath)
          }
        ];
  };

export const routerNodes = async (fullPath: string, basePath = ''): Promise<RouteNode[]> =>
  (await Promise.all((await dirContent(fullPath)).filter(onlyValidDirectories).map(toRouteNode(basePath, fullPath))))
    .flat()
    .sort(alphaOrder);
