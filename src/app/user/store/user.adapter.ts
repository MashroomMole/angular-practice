import { address, company, geo, UserType } from './user.type';
import { UserModel } from '../../shared/model/model';

/**
 * JSON adapter
 * mapping response from server to view model
 */
export class UserAdapter {
  public static adapter(serverResponse: UserType): UserModel {
    return {
      id: serverResponse.id,
      name: serverResponse.name,
      username: serverResponse.username,
      email: serverResponse.email,
      phone: serverResponse.phone,
      website: serverResponse.website,
      address: UserAdapter.addressAdapter.serverResponse.address,
      company: UserAdapter.companyAdapter(serverResponse.company)
    };
  }

  public static geoAdapter(serverResponse: geo): any {
    return {
      geo: serverResponse.toString()
    };
    }

  public static addressAdapter(serverResponse: address): any {
    return {
      address: JSON.stringify(serverResponse),
      };
    }

  public static companyAdapter(serverResponse: company): any {
    return {
      company: JSON.stringify(serverResponse)
    };
  }
}
