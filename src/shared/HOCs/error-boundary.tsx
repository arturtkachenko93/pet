import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    fallback: NonNullable<ReactNode>;
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
    }

    state = { hasError: false };

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { fallback, children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return <>{fallback}</>;
        }

        return children;
    }
}
