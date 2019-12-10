class DrawingApp {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    constructor(canvasId: string) {
        let canvas = document.getElementById(canvasId) as
            HTMLCanvasElement;
        let context = canvas.getContext("2d");

        this.canvas = canvas;
        this.ctx = context;

        this.redraw();

    }

    private redraw() {
        const ctx = this.ctx;
        ctx.fillStyle = 'black';
        ctx.fillRect(30, 30, 150, 100);
    }
}

new DrawingApp('canvas');