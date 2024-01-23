import { Cancel } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import {
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import { CreatePoll } from 'schemas';

const PollOptionInput = ({
  index,
  register,
  remove,
  value,
  disableRemove,
  errors,
}: {
  index: number;
  register: UseFormRegister<CreatePoll>;
  errors: FieldErrors<CreatePoll>;
  remove: UseFieldArrayRemove;
  value: string;
  disableRemove: boolean;
}) => {
  return (
    <div>
      <div className="relative mb-2 flex items-center">
        <TextField
          key={index}
          id={`option-${index}`}
          placeholder={`Option ${index + 1}`}
          defaultValue={value}
          {...register(`options.${index}.text`)}
        />

        {!disableRemove && (
          <Button type="button" onClick={() => remove(index)}>
            <Cancel />
          </Button>
        )}
      </div>
    </div>
  );
};

export default PollOptionInput;
