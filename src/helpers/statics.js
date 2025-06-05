const statics = {
    role: {
        USER: {
            name: 'USER',
            permissions: ['READ_USERS', 'READ_TASKS', 'START_TASK', 'DONE_TASK']
        },
        ADMIN: {
            name: 'ADMIN',
            permissions: [
                'CREATE_USER',
                'UPDATE_USERS',
                'DELETE_USERS',
                'READ_USERS',
                'CREATE_TASK',
                'UPDATE_TASK',
                'DELETE_TASK',
                'READ_TASKS',
                'START_TASK',
                'DONE_TASK'
            ]
        }
    },
    STATUS: {
        PENDING: 'PENDING',
        IN_PROGRESS: 'IN_PROGRESS',
        DONE: 'DONE'
    }
};

module.exports = statics;
