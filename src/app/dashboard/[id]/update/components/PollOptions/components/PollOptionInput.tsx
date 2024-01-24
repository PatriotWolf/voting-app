import { Cancel } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
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
    <Box>
      <Box>
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
      </Box>
    </Box>
  );
};

export default PollOptionInput;
