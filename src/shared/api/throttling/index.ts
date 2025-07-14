export function throttle<Args>(
    func: (args: Args) => void,
    delay: number,
    options: { leading?: boolean; trailing?: boolean } = {
        leading: true,
        trailing: true,
    }
) {
    let lastExec = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let lastArgs: Args | undefined;

    return function (args: Args) {
        const now = Date.now();
        const elapsed = now - lastExec;

        const execute = () => {
            func(args);
            lastExec = now;
            timeoutId = undefined;
        };

        if (elapsed > delay) {
            // Если задержка истекла
            if (options.leading) {
                execute();
            }
        } else {
            // Отменяем предыдущий отложенный вызов
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // Запланировать следующий вызов
            if (options.trailing) {
                timeoutId = setTimeout(() => {
                    if (lastArgs) {
                        func(lastArgs);
                    }
                    lastExec = Date.now();
                    timeoutId = undefined;
                }, delay - elapsed);
            }
        }

        lastArgs = args;
    };
}
