export default async function  DetailsId({
    params, //Next had a params that incloud this params for fetching ID details from DB
}: {
    params: { id: number };
}) {
    const {id} = params
    return(
        <div>
        this is {id} details
        </div>
    )
}