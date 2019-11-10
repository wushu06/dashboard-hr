<script>
    export default {
        data: () => ({
            drawer: false,
            group: null,
            admins: [
                ['Management', 'people_outline'],
                ['Settings', 'settings'],
            ],
            cruds: [
                ['Create', 'add'],
                ['Read', 'insert_drive_file'],
                ['Update', 'update'],
                ['Delete', 'delete'],
            ],
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }),

        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>