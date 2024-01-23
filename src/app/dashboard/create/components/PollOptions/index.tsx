import { Add } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
} from 'react-hook-form';
import { CreatePoll } from 'schemas';

import PollOptionInput from './components/PollOptionInput';

const PollOptions = ({
  control,
  register,
  maxOptions = 5,
  errors,
}: {
  control: Control<CreatePoll>;
  errors: FieldErrors<CreatePoll>;
  register: UseFormRegister<CreatePoll>;
  maxOptions?: number;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options',
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <Typography variant="h6">Options</Typography>
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
            />
          );
        })}
      </div>

      {fields?.length < maxOptions && (
        <Button onClick={() => append({ text: '' })}>
          <Add /> Add option
        </Button>
      )}
    </>
  );
};

export default PollOptions;
