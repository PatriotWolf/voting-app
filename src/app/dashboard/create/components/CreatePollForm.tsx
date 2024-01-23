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
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreatePoll, CreatePollSchema } from 'schemas';

import generateEndDate, { createPoll } from '../utils';
import PollOptions from './PollOptions';

const CretePollForm = () => {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreatePoll>({
    defaultValues: {
      title: '',
      options: [{ text: '' }, { text: '' }],
      endDate: '5',
    },
    resolver: zodResolver(CreatePollSchema),
  });

  const onSubmit: SubmitHandler<CreatePoll> = async data => {
    try {
      const endDate = generateEndDate(data.endDate as string);
      const id = await createPoll({ ...data, endDate: endDate });

      reset();
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

export default CretePollForm;
