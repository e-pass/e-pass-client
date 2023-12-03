import { MuiOtpInput } from 'mui-one-time-password-input';
import { Control, Controller } from 'react-hook-form';
import { FC } from 'react';
import './mui-otp-input-restyle.css';
import { validateNumber } from '../../../zod/schemes.ts';

interface Props {
  control: Control<any>;
}

const OtpCode: FC<Props> = ({control}) => {
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