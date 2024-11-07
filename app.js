new Vue({
    el: '#app',
    data: {
        board: []
    },
    mounted() {
        this.initializeBoard();
    },
    methods: {
        initializeBoard() {
            // Инициализация доски с фигурами
            this.board = [
                [
                    { symbol: '♜', color: 'black' }, { symbol: '♞', color: 'black' }, { symbol: '♝', color: 'black' }, 
                    { symbol: '♛', color: 'black' }, { symbol: '♚', color: 'black' }, { symbol: '♝', color: 'black' }, 
                    { symbol: '♞', color: 'black' }, { symbol: '♜', color: 'black' }
                ],
                [
                    { symbol: '♟', color: 'black' }, { symbol: '♟', color: 'black' }, { symbol: '♟', color: 'black' }, 
                    { symbol: '♟', color: 'black' }, { symbol: '♟', color: 'black' }, { symbol: '♟', color: 'black' }, 
                    { symbol: '♟', color: 'black' }, { symbol: '♟', color: 'black' }
                ],
                [{}, {}, {}, {}, {}, {}, {}, {}],
                [{}, {}, {}, {}, {}, {}, {}, {}],
                [{}, {}, {}, {}, {}, {}, {}, {}],
                [{}, {}, {}, {}, {}, {}, {}, {}],
                [
                    { symbol: '♙', color: 'white' }, { symbol: '♙', color: 'white' }, { symbol: '♙', color: 'white' }, 
                    { symbol: '♙', color: 'white' }, { symbol: '♙', color: 'white' }, { symbol: '♙', color: 'white' }, 
                    { symbol: '♙', color: 'white' }, { symbol: '♙', color: 'white' }
                ],
                [
                    { symbol: '♖', color: 'white' }, { symbol: '♘', color: 'white' }, { symbol: '♗', color: 'white' }, 
                    { symbol: '♕', color: 'white' }, { symbol: '♔', color: 'white' }, { symbol: '♗', color: 'white' }, 
                    { symbol: '♘', color: 'white' }, { symbol: '♖', color: 'white' }
                ]
            ];
        }
    }
});
