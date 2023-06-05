// List.server.js
import { getPelisInfo } from '../Api/apipelis';

export default function List({ children }) {
  const data = getPelisInfo();
   console.log(data);
  return children(data);
}
