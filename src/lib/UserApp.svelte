<script>
    import UserRow from './UserRow.svelte'

    const user = {
        id: 1,
        name: "eri",
        address: "palembang" 
    }

</script>


<table>
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>address</th>
        </tr>
    </thead>
    <tbody>
        <UserRow {...user}/>
    </tbody>
</table>