import { IsEnum, IsOptional, IsNumber, IsNotEmpty } from "class-validator";
enum Status {
    DECLINED = 'declined',
    SERVICED = 'serviced',
    PENDING = 'pending',
  }
export class CreateBookingDto{

    @IsNumber()
    customerId: number;

    @IsNumber()
    technicianId: number;

    @IsNotEmpty({ message: 'Date cannot be empty' })
    serviceDate: Date;

    @IsNotEmpty({ message: 'Cannot be empty' })
    serviceNeeded: string;

    @IsNotEmpty({ message: 'Cannot be empty' })
    problemDescription: string;

    @IsOptional()
    @IsEnum(Status, {message: 'Status is not valid'})
    status: Status;


}
    