export const NodeHeader = ({ title, icon }) => {
    return (
        
        <div className="node-header">
            <div className="node-header-left">
                {icon && (
                    <span className="node-icon">
                        {icon}
                    </span>
                )}
                <h4 className="node-title">
                    {title}
                </h4>
            </div>
        </div>

    );
};