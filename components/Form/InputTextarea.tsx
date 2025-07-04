
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type FormInputProps = {
  name: string;
  // type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string; //
  className?: string
};

const InputTextarea = (props: FormInputProps) => {
  return (
    <div>
      <div >
        <Label className="m-2" htmlFor={props.name}>{props.label}</Label>
        <Textarea
          className={props.className}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};
export default InputTextarea;
