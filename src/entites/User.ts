interface IUser {
  name: string,
  password: string,
  linkedin: string,
}

class User {
  constructor(protected props: IUser) {}
}

export {
  User
}