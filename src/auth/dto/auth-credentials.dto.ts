import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(6, {
    message: 'Password must be longer than or equal to 6 characters.'
  })
  @MaxLength(20, {
    message: 'Password must be shorter than or equal to 20 characters.'
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak.'
  })
  password: string;
}
