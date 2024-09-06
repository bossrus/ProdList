import type { IAddress } from '~/interfaces/address.interface';
import type { ICompany } from '~/interfaces/copmany.interface';

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}
