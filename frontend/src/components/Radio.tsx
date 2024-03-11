import { LabelValueType } from "@/lib/constants";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio as MUIRadio,
  RadioProps as MUIRadioProps,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type RadioProps<T extends FieldValues> = {
  control: Control<T>;
  id: Path<T>;
  label?: string;
  options: LabelValueType[];
  radioProps?: MUIRadioProps;
} & RadioGroupProps;

const Radio = <T extends FieldValues>({
  options,
  control,
  id,
  label,
  ...props
}: RadioProps<T>) => {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          size={props.radioProps?.size}
          error={Boolean(fieldState.error)}
        >
          {label && <FormLabel id={id + "label"}>{label}</FormLabel>}
          <RadioGroup aria-labelledby={id + "label"} {...props} {...field}>
            {options?.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<MUIRadio {...props.radioProps} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {fieldState.error && (
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default Radio;
