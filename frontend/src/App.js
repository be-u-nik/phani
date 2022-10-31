import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center align-center p-2 lg:pt-10 mx-auto max-w-[1440px] w-screen h-screen">
      <h1 className="text-center font-bold text-xl">Wecome User2</h1>
      <div className="p-4 lg:pt-10 w-full h-full flex flex-col lg:flex-row justify-center align-center">
        <div className="lg:w-1/3">
          <form>
            <h4 className="font-bold py-4">Upload File</h4>
            <label className="py-2 mt-2" htmlFor="button1">
              File to upload:
            </label>
            <br />
            <input type="file" className="" />

            <br />
            <label className="py-2 mt-6" htmlFor="replication_factor">
              Replication Factor(between 1 to 100) &nbsp;
            </label>
            <input
              type="number"
              className="border-[1px] border-[#000000]  max-w-[50px]"
            ></input>
            <br />
            <button
              onClick={async (e) => {}}
              type="submit"
              className="w-full md:max-w-[100px] mt-2 h-[28px] px-[10px] py-[6px] rounded-[4px] text-[8px] lg:text-[12px] font-bold bg-[#B1EAC1] hover:bg-[#58d17a]"
            >
              Upload
            </button>
          </form>
          <h4 className="font-bold py-4 lg:pt-10 ">Download File</h4>
          <button
            onClick={async (e) => {}}
            className="w-full md:max-w-[100px] mt-2 h-[28px] px-[10px] py-[6px] rounded-[4px] text-[8px] lg:text-[12px] font-bold bg-[#B1EAC1] hover:bg-[#58d17a]"
          >
            Download
          </button>
          <h4 className="font-bold py-4 lg:pt-10 ">Share File</h4>
          <form>
            <label htmlFor="share_with">Share With</label>
            <br />
            <input
              type="text"
              className="border-[1px] border-[#000000] max-w-[200px]"
            />
            <br />
            <button
              onClick={async (e) => {}}
              type="submit"
              className="w-full md:max-w-[100px] mt-2 h-[28px] px-[10px] py-[6px] rounded-[4px] text-[8px] lg:text-[12px] font-bold bg-[#B1EAC1] hover:bg-[#58d17a]"
            >
              Share
            </button>
          </form>
          <h4 className="font-bold py-4 lg:pt-10 ">Delete File</h4>
          <button
            onClick={async (e) => {}}
            className="w-full md:max-w-[100px] mt-2 h-[28px] px-[10px] py-[6px] rounded-[4px] text-[8px] lg:text-[12px] font-bold bg-[#B1EAC1] hover:bg-[#58d17a]"
          >
            Delete
          </button>
        </div>
        <div className="lg:w-1/3">
          <h4 className="font-bold py-4">Files:</h4>
          <table className="w-100 max-w-[400px] py-4 table-auto border-separate border-spacing-2">
            <thead>
              <tr className="font-bold text-base">
                <th className="w-[100px] text-left"> FileName</th>
                <th className="w-[100px] text-left">Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abc.zip</td>
                <td>200kb</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:w-1/3">
          <h4 className="font-bold py-4">Shared with me:</h4>
          <table className="py-4 table-auto">
            <thead>
              <tr className="font-bold text-base">
                <th className="w-[100px] text-left">FileName</th>
                <th className="w-[100px] text-left">Shared By</th>
                <th className="w-[100px] text-left">Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abc.zip</td>
                <td>user 1</td>
                <td>200kb</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
