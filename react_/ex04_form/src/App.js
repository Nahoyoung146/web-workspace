import Input01Con from './containers/form/input01Con';
import CheckBox02Con from './containers/form/CheckBox02Con';
import { RadioBox03Con } from './containers/form/RadioBox03Con';
import { UseRefIndex } from './containers/use_ref/UseRefIndex';
import { UseRefCon } from './containers/use_ref/UseRefCon';

export function App() {
  return <>
    <Input01Con /><hr />
    <CheckBox02Con /><hr />
    <RadioBox03Con /><hr />
    <UseRefIndex /><hr />
    <UseRefCon />
  </>
}