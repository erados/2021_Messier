# klaytn-kip-token-trade-smartcontract

## 클레이튼 KIP 토큰을 사용한 상거래 컨트랙트

### 설명
1. KIP-7 토큰은 이더리움의 ERC-20, KIP-17은 ERC-721과 같다.
2. 각 토큰 인터페이스를 상속받아서 구체화한 것이 Token7.sol과 Token17.sol이다.

### Token7.sol
- SpenderRole contract: 외부 EOA나 CA 가 해당 컨트랙트를 사용할 수 있게 사용자를 추가해주는 컨트랙트
- KIP7Spendable contract: 외부에서 컨트랙트에 정의된 함수를 호출하여 토큰을 전송하는 컨트랙트

### Token17.sol
- enrollSneakers(): NFT를 생성하는 함수
- buyingSneakers(): Token7로 NFT를 구매하는 함수
- deliveryStart(): 토큰을 구매했으면 배송을 시작할 수 있는 함수
- deliveryEnd(): 배송 완료를 표시해주는 함수
- deliveryConfirm(): 토큰을 구매하고 실제 배송을 받은 구매자가 컨펌하기 위해 호출할 수 있고, Token7을 판매자에게, NFT를 구매자에게 전송해주는 함수

