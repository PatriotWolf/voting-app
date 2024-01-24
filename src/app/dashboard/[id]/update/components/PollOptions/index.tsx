import { Add } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form';
import { UpdatePoll } from 'schemas';

import PollOptionInput from './components/PollOptionInput';

const PollOptions = ({
  control,
  register,
  maxOptions = 5,
  errors,
}: {
  control: Control<UpdatePoll>;
  errors: FieldErrors<UpdatePoll>;
  register: UseFormRegister<UpdatePoll>;
  maxOptions?: number;
}) => {
  const { fields: oldField, remove: oldRemove } = useFieldArray({
    control,
    name: 'oldOptions',
  });
  const { append: deleteAppend } = useFieldArray({
    control,
    name: 'deleteOptions',
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options',
  });

  return (
    <>
      <Box>
        <Typography variant="h6">Options</Typography>
        {oldField?.map((field, index) => {
          return (
            <PollOptionInput
              index={index}
              key={field.id}
              remove={index => {
                oldRemove(index);
                deleteAppend(oldField[index]);
              }}
              value={field.text}
              register={register}
              errors={errors}
              disableRemove={false}
              optionName="oldOptions"
            />
          );
        })}
        <Divider sx={{ my: 1 }} />
        {fields?.map((field, index) => {
          return (
            <PollOptionInput
              index={index}
              key={field.id}
              remove={remove}
              value={field.text}
              register={register}
              errors={errors}
              disableRemove={fields.length <= 2}
              optionName="options"
            />
          );
        })}
      </Box>

      {fields?.length < maxOptions && (
        <Button onClick={() => append({ text: '' })}>
          <Add /> Add New Option
        </Button>
      )}
    </>
  );
};

export default PollOptions;
