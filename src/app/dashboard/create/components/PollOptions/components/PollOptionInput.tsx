import { Cancel } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
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
}: {
  index: number;
  register: UseFormRegister<CreatePoll>;
  errors: FieldErrors<CreatePoll>;
  remove: UseFieldArrayRemove;
  value: string;
  disableRemove: boolean;
}) => {
  return (
    <Box>
      <Box>
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
      </Box>
    </Box>
  );
};

export default PollOptionInput;
