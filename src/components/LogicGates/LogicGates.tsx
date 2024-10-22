import  { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { TruthTable } from '../TruthTable/TruthTable';

export const LogicGates = () => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);

  const andOutput = inputA && inputB;
  const orOutput = inputA || inputB;
  const xorOutput = inputA !== inputB;  

  const GateOutput = ({ value }: { value: boolean }) => (
    <span className={`text-lg font-mono font-bold ${value ? 'text-green-600' : 'text-red-600'}`}>
      {value ? '1' : '0'}
    </span>
  );

  const InputControls = () => (
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Input A</label>
        <div className="flex items-center gap-2">
          <Switch 
            checked={inputA}
            onCheckedChange={setInputA}
          />
          <span className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">
            {inputA ? '1' : '0'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Input B</label>
        <div className="flex items-center gap-2">
          <Switch 
            checked={inputB}
            onCheckedChange={setInputB}
          />
          <span className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">
            {inputB ? '1' : '0'}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Logic Gates Simulator</CardTitle>
      </CardHeader>
      <CardContent>
         <InputControls />
        
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AND Gate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="h-10 mb-2 text-sm text-slate-600">Both inputs must be 1</p>
                <GateOutput value={andOutput} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">OR Gate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="h-10 mb-2 text-sm text-slate-600 just">At least one input must be 1</p>
                <GateOutput value={orOutput} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">XOR Gate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="h-10 mb-2 text-sm text-slate-600">Exactly one input must be 1</p>
                <GateOutput value={xorOutput} />
              </div>
            </CardContent>
          </Card>
        </div>

        <TruthTable />
      </CardContent>
    </Card>
  );
};
