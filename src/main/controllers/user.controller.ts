import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from "@nestjs/common";
import { UserProvider } from "../providers/user.provider";
import { NotFoundInterceptor } from "../shared/notfound";

// https://picsum.photos/seed/1/200/200

@Controller('users')
@UseInterceptors(new NotFoundInterceptor())
export class UserController {
  constructor(
    private readonly rootProvider: UserProvider,
  ) {}

  @Get()
  getAll() {
    const result = new Promise((resolve) => {
      this.rootProvider.getAll().then(users => {
        const res = users.map(user => {
          return { ...user, avatar: `https://picsum.photos/seed/${user?.id}/200/200` };
        });
        Promise.all(res).then(users => resolve(users))
      });
    });
    // return this.rootProvider.getAll();
    return result;
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    const result = new Promise((resolve) => {
      this.rootProvider.getById(id).then(user => resolve(
        user === undefined
        ? undefined
        : { ...user, avatar: `https://picsum.photos/seed/${user?.id}/200/200` }
      ));
    });
    return result;
    // return this.rootProvider.getById(id);
  }

  @Post('auth')
  userAuth(@Body() data) {
    const result = new Promise((resolve) => {
      this.rootProvider
        .getOne({ where: { phone: data.phone, password: data.password } })
        .then(user => resolve(
          user === undefined
          ? undefined
          : { ...user, avatar: `https://picsum.photos/seed/${user?.id}/200/200` }
        ));
    });
    return result;
    // return this.rootProvider.getOne({ where: { phone: data.phone, password: data.password } });
  }

  @Post()
  create(@Body() data) {
    return this.rootProvider.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return this.rootProvider.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.rootProvider.delete(id);
  }
}