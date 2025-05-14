// 动态焦点系统
function optimizeLowCountLayout(games) {
  const screenArea = window.innerWidth * window.innerHeight;
  const baseSize = Math.sqrt(screenArea/games.length)*0.8;
  games.forEach(game => {
    game.element.style.width = `${baseSize}px`;
    game.element.style.height = `${baseSize*1.25}px`;
  });
}

// 智能防抖
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(layoutRefresh, 150);
});

function layoutRefresh() {
  // 这里添加布局刷新逻辑
}

// 跨浏览器策略
if('container' in document.documentElement.style) {
  // 使用现代容器查询
} else {
  // 回退到 ResizeObserver 填充库
  // 需引入 ResizeObserver 填充库
}

// 假设这是游戏数据
const games = [
  // 游戏对象数组
];

function renderGames() {
  const gameCount = games.length;
  const gameGrid = document.querySelector('.game-grid');

  // 清空现有内容
  gameGrid.innerHTML = '';

  if (gameCount >= 1 && gameCount <= 3) {
    // 英雄轮播
    renderHeroCarousel();
  } else if (gameCount >= 4 && gameCount <= 6) {
    // 非对称砖石布局
    renderAsymmetricMasonry();
  } else if (gameCount >= 7 && gameCount <= 12) {
    // 分页网格
    renderPaginatedGrid();
  } else {
    // 面向搜索的列表
    renderSearchOrientedList();
  }
}

function renderHeroCarousel() {
  // 实现英雄轮播布局
}

function renderAsymmetricMasonry() {
  // 实现非对称砖石布局
}

function renderPaginatedGrid() {
  // 实现分页网格布局
}

function renderSearchOrientedList() {
  // 实现面向搜索的列表布局
}

// 初始化渲染
renderGames();

const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const gameId = button.dataset.gameId;
        const amount = 10;
        try {
            // 调用统一的支付处理接口
            const paymentResult = await handlePayment(amount, gameId);
            window.location.href = paymentResult.paymentUrl;
        } catch (error) {
            console.error('Payment request failed:', error);
            alert('支付失败，请重试');
        }
    });
});

// 前端集成
// 引入 Web3.js 库
const Web3 = require('web3');
// 假设已经部署了智能合约
const contractAddress = '0xYourContractAddress';
const contractABI = [
    // 这里需要替换为实际的合约 ABI
];

// 初始化 Web3 实例
const web3 = new Web3(window.ethereum);
const referralContract = new web3.eth.Contract(contractABI, contractAddress);

// 新用户注册
async function register(referrerAddress) {
    try {
        await referralContract.methods.register(referrerAddress).send({ from: web3.eth.defaultAccount });
        console.log('Registration successful');
    } catch (error) {
        console.error('Registration failed:', error);
    }
}

// 处理用户付费
async function handlePayment(amount) {
    try {
        await referralContract.methods.handlePayment(amount).send({ from: web3.eth.defaultAccount });
        console.log('Payment processed successfully');
    } catch (error) {
        console.error('Payment processing failed:', error);
    }
}


function generateReferralLink() {
    const currentUserAddress = web3.eth.defaultAccount;
    return `${window.location.origin}?referrer=${currentUserAddress}`;
}

// 在页面加载时检查是否有邀请者参数
window.addEventListener('load', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get('referrer');
    if (referrer) {
        // 新用户注册并绑定邀请关系
        await register(referrer);
    }
});

// 创建一个 div 元素，用于包裹 iframe
const containerDiv = document.createElement('div');
containerDiv.style.marginTop = '20px';

// 创建 iframe 元素
const iframe = document.createElement('iframe');
iframe.id = 'game-iframe';
iframe.src = '';
iframe.width = '100%';
iframe.height = '600px';
iframe.frameBorder = 0;
iframe.allowFullscreen = true;

// 将 iframe 添加到 div 中
containerDiv.appendChild(iframe);

// 将 div 添加到页面中，假设添加到 body 元素
document.body.appendChild(containerDiv);

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    const iframe = document.getElementById('game-iframe');
    iframe.src = 'about:blank'; // 临时设置为空白页测试iframe是否工作
});

document.getElementById('game-upload-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        
        if(response.ok) {
            alert('Game uploaded successfully!');
        } else {
            throw new Error('Upload failed');
        }
    } catch (error) {
        console.error('Upload error:', error);
        alert('Upload failed. Please try again.');
    }
});