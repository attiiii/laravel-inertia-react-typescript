import { AxiosInstance } from 'axios';
import ziggyRoute from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    // eslint-disable-next-line no-var
    var route: typeof ziggyRoute;
}
