import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="container py-5 text-center mt-5">
                    <div className="alert alert-danger shadow-lg p-5">
                        <h2 className="mb-4">Something went wrong.</h2>
                        <details className="text-start bg-white p-3 rounded" style={{ whiteSpace: 'pre-wrap' }}>
                            <summary>Error Details</summary>
                            <br />
                            <strong>{this.state.error && this.state.error.toString()}</strong>
                            <br />
                            <br />
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </details>
                        <button className="btn btn-primary mt-4" onClick={() => window.location.reload()}>
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
