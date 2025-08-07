import React, { useState, useEffect } from 'react';
import './SmartPortArchitecture.css';

function SmartPortArchitecture() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [animationPhase, setAnimationPhase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationPhase(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const architectureLayers = [
        { name: '决策层', icon: '🧠', color: '#667eea', description: '智能决策与调度' },
        { name: '应用层', icon: '📱', color: '#764ba2', description: '业务应用系统' },
        { name: '平台层', icon: '⚙️', color: '#f093fb', description: '数据处理平台' },
        { name: '网络层', icon: '🌐', color: '#4facfe', description: '通信网络架构' },
        { name: '感知层', icon: '👁️', color: '#43e97b', description: '传感器与采集' }
    ];

    const businessModules = [
        {
            title: '生产组织智能化',
            icon: '🏗️',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            features: ['自动调度', '智能排产', '资源优化', '协同作业'],
            position: 'top'
        },
        {
            title: '末端执行智能化',
            icon: '🤖',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            features: ['无人驾驶', '自动装卸', '精准定位', '安全监控'],
            position: 'left'
        },
        {
            title: '设备维护预测化',
            icon: '🔧',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            features: ['故障预测', '预防维护', '状态监控', '智能诊断'],
            position: 'right'
        }
    ];

    return (
        <div className="smart-port-container">
            {/* 背景粒子效果 */}
            <div className="particles-bg">
                {[...Array(50)].map((_, i) => (
                    <div 
                        key={i} 
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            {/* 标题区域 */}
            <div className="header-section">
                <div className="main-title">
                    <h1>
                        <span className="title-icon">🏗️</span>
                        原料码头无人化改造整体架构
                    </h1>
                    <p className="subtitle">
                        "自组织、自执行、自维护" 智能化体系
                    </p>
                </div>
            </div>

            {/* 主要架构区域 */}
            <div className="architecture-layout">
                {/* 顶部：生产组织智能化 */}
                <div 
                    className={`business-module top-module ${hoveredCard === 'production' ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredCard('production')}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ background: businessModules[0].gradient }}
                >
                    <div className="module-content">
                        <div className="module-header">
                            <span className="module-icon">{businessModules[0].icon}</span>
                            <h3>{businessModules[0].title}</h3>
                        </div>
                        <div className="module-features">
                            {businessModules[0].features.map((feature, index) => (
                                <span key={index} className="feature-tag">{feature}</span>
                            ))}
                        </div>
                    </div>
                    <div className="glow-effect"></div>
                </div>

                {/* 中央：5层技术架构 */}
                <div className="central-architecture">
                    <div className="architecture-title">
                        <h3>🏛️ 技术架构层次</h3>
                    </div>
                    <div className="layers-container">
                        {architectureLayers.map((layer, index) => (
                            <div 
                                key={index}
                                className={`architecture-layer ${animationPhase === index ? 'active' : ''}`}
                                style={{ 
                                    background: `linear-gradient(135deg, ${layer.color}aa, ${layer.color})`,
                                    animationDelay: `${index * 0.2}s`
                                }}
                                onMouseEnter={() => setHoveredCard(`layer-${index}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="layer-content">
                                    <span className="layer-icon">{layer.icon}</span>
                                    <div className="layer-info">
                                        <h4>{layer.name}</h4>
                                        <p>{layer.description}</p>
                                    </div>
                                </div>
                                <div className="layer-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 底部：左右两个模块 */}
                <div className="bottom-modules">
                    {/* 左侧：末端执行智能化 */}
                    <div 
                        className={`business-module left-module ${hoveredCard === 'execution' ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredCard('execution')}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{ background: businessModules[1].gradient }}
                    >
                        <div className="module-content">
                            <div className="module-header">
                                <span className="module-icon">{businessModules[1].icon}</span>
                                <h3>{businessModules[1].title}</h3>
                            </div>
                            <div className="module-features">
                                {businessModules[1].features.map((feature, index) => (
                                    <span key={index} className="feature-tag">{feature}</span>
                                ))}
                            </div>
                        </div>
                        <div className="glow-effect"></div>
                    </div>

                    {/* 右侧：设备维护预测化 */}
                    <div 
                        className={`business-module right-module ${hoveredCard === 'maintenance' ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredCard('maintenance')}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{ background: businessModules[2].gradient }}
                    >
                        <div className="module-content">
                            <div className="module-header">
                                <span className="module-icon">{businessModules[2].icon}</span>
                                <h3>{businessModules[2].title}</h3>
                            </div>
                            <div className="module-features">
                                {businessModules[2].features.map((feature, index) => (
                                    <span key={index} className="feature-tag">{feature}</span>
                                ))}
                            </div>
                        </div>
                        <div className="glow-effect"></div>
                    </div>
                </div>
            </div>

            {/* 连接线动画 */}
            <svg className="connections-svg" viewBox="0 0 1200 800">
                <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#667eea" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#764ba2" stopOpacity="0.8"/>
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f093fb" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#f5576c" stopOpacity="0.8"/>
                    </linearGradient>
                    <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4facfe" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.8"/>
                    </linearGradient>
                </defs>
                
                {/* 从顶部到中央的连接线 */}
                <path
                    d="M 600 200 Q 600 250 600 300"
                    stroke="url(#lineGradient1)"
                    strokeWidth="4"
                    fill="none"
                    className="connection-line line-1"
                />
                
                {/* 从中央到左下的连接线 */}
                <path
                    d="M 550 500 Q 400 550 250 600"
                    stroke="url(#lineGradient2)"
                    strokeWidth="4"
                    fill="none"
                    className="connection-line line-2"
                />
                
                {/* 从中央到右下的连接线 */}
                <path
                    d="M 650 500 Q 800 550 950 600"
                    stroke="url(#lineGradient3)"
                    strokeWidth="4"
                    fill="none"
                    className="connection-line line-3"
                />

                {/* 流动的点 */}
                <circle r="6" fill="#667eea" className="flow-dot dot-1">
                    <animateMotion dur="3s" repeatCount="indefinite">
                        <mpath href="#" />
                    </animateMotion>
                </circle>
            </svg>

            {/* 底部控制说明 */}
            <div className="controls-info">
                <div className="control-item">
                    <span>🖱️</span>
                    <span>悬停查看详情</span>
                </div>
                <div className="control-item">
                    <span>✨</span>
                    <span>自动层级展示</span>
                </div>
                <div className="control-item">
                    <span>🎯</span>
                    <span>智能化架构</span>
                </div>
            </div>
        </div>
    );
}

export default SmartPortArchitecture;