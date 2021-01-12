import { ServerResponse } from './user.server.response';
import { UserModel } from '../../shared/model/model';

/**
 * JSON adapter
 * mapping response from server to view model
 */
export class UserAdapter {
  public static adapter(model: ServerResponse): UserModel {
    return {
      id: model.id,
      name: model.name,
      username: model.username,
      email: model.email,
      phone: model.phone,
      website: model.website,
      address: [
        model.address.city,
        model.address.street,
        model.address.suite,
        model.address.zipcode,
      ],
      geo: [
        model.address.geo.lat,
        model.address.geo.lng
      ],
      company: [
        model.company.name,
        model.company.bs,
        model.company.catchPhrase
      ]
    };
  }
}
