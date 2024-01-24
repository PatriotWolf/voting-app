'use client';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Prisma } from '@prisma/client';
import generateEndDate, { updatePoll } from 'app/dashboard/create/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UpdatePoll, UpdatePollSchema } from 'schemas';

import PollOptions from './PollOptions';

interface Props {
  defaultPoll: Prisma.PollGetPayload<{ include: { options: true } }>;
}

const UpdatePollForm = ({ defaultPoll }: Props) => {
  const { id: pollId, title, description, options } = defaultPoll;

  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<UpdatePoll>({
    defaultValues: {
      title,
      description: description || undefined,
      oldOptions:
        options.map(option => ({
          optionId: option.id,
          text: option.text || '',
        })) || [],
      deleteOptions: [],
      options: [],
      endDate: '5',
    },
    resolver: zodResolver(UpdatePollSchema),
  });

  const onSubmit: SubmitHandler<UpdatePoll> = async data => {
    try {
      const endDate = generateEndDate(data.endDate as string);
      const id = await updatePoll(pollId, { ...data, endDate: endDate });

      router.push(`/dashboard/${id}`);
    } catch (error) {}
  };
  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Title"
          autoFocus
          {...register('title')}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Description"
          {...register('description')}
        />

        <Box>
          <PollOptions control={control} errors={errors} register={register} />
        </Box>

        <Box className="flex flex-col gap-2">
          <Select
            id="end-date"
            defaultValue={'5'}
            className="w-full rounded border border-brand-surface bg-brand-crust px-4 py-3 text-brand-subtext caret-brand-mauve focus:outline-none focus:ring-1 focus:ring-brand-mauve"
            {...register('endDate')}
          >
            <MenuItem value="5">5 minutes</MenuItem>
            <MenuItem value="10">10 minutes</MenuItem>
            <MenuItem value="15">15 minutes</MenuItem>
            <MenuItem value="20">20 minutes</MenuItem>
          </Select>
        </Box>
        {errors.options?.length && (
          <Typography>Blank option not allowed</Typography>
        )}

        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default UpdatePollForm;
