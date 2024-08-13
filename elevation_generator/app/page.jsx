import Image from "next/image";

export default function Home() {
  return (
    <main className="justify-center items-center h-full w-full flex lg:flex-col gap-8 min-h-full">
      <div className="bg-gray-100 p-5 rounded shadow-lg">
        <h2 className="text-2xl font-bold pb-3">Settings</h2>
        <p className="py-3">File</p>
        <input
          type="file"
          className="file-input w-full max-w-xs te bg-primary-content"
        />
        <p className="py-3">Padding</p>
        <input
          type="range"
          min={0}
          max="99"
          defaultValue="40"
          className="range range-primary"
        />
        <p className="py-3">Border Radius -</p>
        <input
          type="range"
          min={0}
          max="99"
          defaultValue="40"
          className="range range-primary"
        />
        <p className="py-3">Shadow</p>
        <input
          type="range"
          min={0}
          max="99"
          defaultValue="40"
          className="range range-primary"
        />
      </div>
      <div>Upload</div>
    </main>
  );
}
