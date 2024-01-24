import { Cancel } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { UpdatePoll } from 'schemas';

const PollOptionInput = ({
  index,
  register,
  remove,
  value,
  disableRemove,
  optionName,
}: {
  index: number;
  register: UseFormRegister<UpdatePoll>;
  errors: FieldErrors<UpdatePoll>;
  remove: (index: number) => void;
  value: string;
  disableRemove: boolean;
  optionName: 'oldOptions' | 'options';
}) => {
  return (
    <div>
      <div className="relative mb-2 flex items-center">
        <TextField
          key={index}
          id={`option-${index}`}
          placeholder={`Option ${index + 1}`}
          defaultValue={value}
          {...register(`${optionName}.${index}.text`)}
        />

        {!disableRemove && (
          <Button
            type="button"
            onClick={() => {
              remove(index);
            }}
          >
            <Cancel />
          </Button>
        )}
      </div>
    </div>
  );
};

export default PollOptionInput;
