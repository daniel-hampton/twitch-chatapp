import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className={"grid place-items-center min-h-full"}>
      <Head>
        <title>Chat Room 1</title>
        <meta name="description" content="Chat Room 1" />
      </Head>

      <main className="bg-slate-200 p-4 space-y-4 shadow-lg rounded">
        <h1 className="text-slate-50 font-bold text-xl p-2 bg-slate-800 rounded">
          Room 01
        </h1>
        <div className="bg-slate-400 p-2 space-y-2 w-96 rounded">
          <div className="bg-slate-200 p-2 shadow rounded">First message</div>
          <div className="bg-slate-200 p-2 text-right shadow rounded">
            Second message
          </div>
          <div className="bg-slate-200 p-2 shadow rounded">Third message</div>
        </div>

        <div className="bg-slate-600 p-2 space-y-2 rounded">
          <div className="bg-slate-200 p-2 rounded shadow-inner">
            User one input
          </div>
          <div className="bg-slate-200 p-2 text-right rounded shadow-inner">
            User two input
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
