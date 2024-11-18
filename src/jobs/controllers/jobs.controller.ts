import {
  Body,
  Controller,
  Post,
  Query,
  Get,
  ValidationPipe,
  ParseArrayPipe,
} from "@nestjs/common";
import { CreateJobDTO } from "../dto/create-job.dto";
import { Paginable } from "../dto/paginable.dto";
import { JobsService } from "../services/jobs.service";

// In joi package , hme ek dto and schema dono bnane padte the 

// also we were not able to transform the data in joi (joi me sirf validate krre the sirf)

// Now 
// now we will use only single dto file , and usme transformation and validation dono ho jayengi  


// *** **** **** 
// FOr this we will use built in validation pipe available in nextjs  

// To use that pipe   -  we have to install 2 packages 
// npm i class-validator class-trasnformer --save

// NOW IN DONO PACKAGES KI HELP SE HMNE APNA DTO ME DATA VALIDATION THINGS KRLI 



@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  // We can use validation pipe like this as well 
  // UsePipes(ValidationPipe)

  // now here we have used the validation pipe which comes from nestjs/common
  // createJob(@Body(ValidationPipe) createJobDto: CreateJobDTO) {
  //   return this.jobsService.createJob(createJobDto);
  // }




  // Also if there are multiple values coming from client side 
  // like if there is array of objects then use this 
  // createJob(@Body(new ParseArrayPipe({items: CreateJobDTO}), ValidationPipe)){

  // }


  // query paramers pe validation kaise lga ste hain 
  // @Get('tags/:id')
  // findJobTags(Query(ValidationPipe) query: Paginable){

  // }



  createJob(@Body(ValidationPipe) createJobDto: CreateJobDTO) {
    return this.jobsService.createJob(createJobDto);
  }

  @Get()
  findJobs(@Query() query: Paginable) {
    console.log(query);
    return { success: true };
  }
 
}
