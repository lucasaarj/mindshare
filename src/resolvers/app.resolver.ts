import { Query, Resolver } from 'type-graphql'

@Resolver()
export class AppResolver {
    @Query(() => String)
    health(): string {
        return 'ok'
    }
}
