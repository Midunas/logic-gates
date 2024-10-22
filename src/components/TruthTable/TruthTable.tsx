export const TruthTable = () => {
    return (
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Truth Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-2 text-left">A</th>
                  <th className="p-2 text-left">B</th>
                  <th className="p-2 text-left">AND</th>
                  <th className="p-2 text-left">OR</th>
                  <th className="p-2 text-left">XOR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">0</td>
                  <td className="p-2">0</td>
                  <td className="p-2">0</td>
                  <td className="p-2">0</td>
                  <td className="p-2">0</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">0</td>
                  <td className="p-2">1</td>
                  <td className="p-2">0</td>
                  <td className="p-2">1</td>
                  <td className="p-2">1</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">1</td>
                  <td className="p-2">0</td>
                  <td className="p-2">0</td>
                  <td className="p-2">1</td>
                  <td className="p-2">1</td>
                </tr>
                <tr>
                  <td className="p-2">1</td>
                  <td className="p-2">1</td>
                  <td className="p-2">1</td>
                  <td className="p-2">1</td>
                  <td className="p-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}