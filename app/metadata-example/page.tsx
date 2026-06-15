import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metadata example",
  description: "This is my example of writing static metadata",
};

function MetadataExample() {
  const examples = [
    {
      id: "1",
      title: "One",
    },
    {
      id: "2",
      title: "Two",
    },
    {
      id: "3",
      title: "Three",
    },
  ];

  return (
    <div>
      <h1>Metadata Examples</h1>
      <ul>
        {examples.map((item) => (
          <li key={item.id}>
            <Link href={`/metadata-example/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MetadataExample;
