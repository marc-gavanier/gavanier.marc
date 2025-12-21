import Link from 'next/link';
import type { RouteNode } from './router-nodes';

export const RenderTree = ({ nodes }: { nodes: RouteNode[] }) => (
  <ul>
    {nodes.map((node) => (
      <li key={node.path}>
        <Link href={node.path}>{node.name}</Link>
        {node.children.length > 0 && <RenderTree nodes={node.children} />}
      </li>
    ))}
  </ul>
);
