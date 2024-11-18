import { JobType } from "../constants/jobs.constants";

import {
  IsString,
  IsEmail,
  IsIn,
  IsInt,
  IsNumber,
  IsBoolean,
  IsOptional,
  ArrayMinSize,
  IsNotEmpty,
  ValidateNested,
  IsObject,
} from "class-validator";

import { Type } from "class-transformer";

export class LocationDTO {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}

export class CreateJobDTO {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEmail()
  email: string;


  // as jobtype is of enum type that is why we have used isin decorator   
  @IsIn(Object.keys(JobType))
  @IsOptional()
  type?: JobType;

  @IsInt()
  @IsNotEmpty()
  experience: number;

  @IsNumber()
  salary: number;

  @IsString({ each: true })
  @ArrayMinSize(1)
  tags: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;


  // to validate nested dto we have used ValidateNested
  @ValidateNested()
  @IsObject()
  @Type(() => LocationDTO)
  location: LocationDTO;
}

