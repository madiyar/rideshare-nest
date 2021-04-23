import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { CommentProvider } from "../providers/comment.provider";
import { UserProvider } from "../providers/user.provider";

@Controller('comments')
export class CommentsController {

    constructor(
        private readonly provider: CommentProvider,
        private readonly userProvider: UserProvider,
    ) {}

    @Get()
    getAll() {
        return this.provider.getAll();
    }

    @Get(':type/:targetId') 
    getComments(@Param('type') type: string, @Param('targetId') id: number) {
        const result = new Promise((resolve) => {
            this.provider.getAll({where: {type: type, targetId: id}}).then(comments => {
                const res = comments.map(comment => {
                    return { ...comment, user: { ...comment.user, avatar: `https://picsum.photos/seed/${comment?.user?.id}/200/200` } };
                });
                Promise.all(res).then(comments => resolve(comments))
            })
        });
        return result;
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.provider.getById(id);
    }

    @Post()
    create(@Body() data) {
        const result = new Promise((resolve) => {
          this.provider.create(data).then(comment => {
            if (comment === undefined) {
              resolve(undefined);
            } else {
              this.userProvider.getById(comment?.userId).then(user => {
                resolve({
                  ...comment,
                  user: {
                    ...user,
                    avatar: `https://picsum.photos/seed/${comment?.userId}/200/200`
                  }
                });
              })
            }
          })
        });
        return result;
        // return this.provider.create(data);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data) {
        return this.provider.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.provider.delete(id);
    }

}