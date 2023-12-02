import { MuiOtpInput } from 'mui-one-time-password-input';
import { Control, Controller } from 'react-hook-form';
import { FC } from 'react';
import { z } from 'zod';
import './mui-otp-input-restyle.css';

interface Props {
  control: Control<{ otp: string; }>;
}

const OtpCode: FC<Props> = ({control}) => {
  const mySchema = z.number().nonnegative();

  const validateNumber = (val: string) => {
    return mySchema.safeParse(+val).success;
  }

  return (
    <Controller
      name="otp"
      control={control}
      rules={{validate: validateNumber}}
      render={({field, fieldState}) => (
        <div>
          <MuiOtpInput
            sx={{gap: 4}}
            {...field}
            length={4}
            validateChar={validateNumber}/>

          {fieldState.invalid ? (
            <p>OTP invalid</p>
          ) : null}
        </div>
      )}
    />
  );
};

export default OtpCode;