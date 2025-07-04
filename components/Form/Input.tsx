
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string; 
  className?: string
};

const Inputpage = (props: FormInputProps) => {
  return (
    <div>
      <div >
        <Label className="m-2" htmlFor={props.name}>{props.label}</Label>
        <Input
          className={props.className}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};
export default Inputpage;
