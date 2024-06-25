import { AsideMenuItem } from '../AsideMenuItem'
import { AsideSubMenuItem } from '../AsideSubMenuItem'
import { AssetClassIcon } from '../icons/AssetClassIcon'
import { FGCCoverageIcon } from '../icons/FGCCoverageIcon'
import { MyEarningsIcon } from '../icons/MyEarningsIcon'
import { MyProductsIcon } from '../icons/MyProductsIcon'
import { PortfolioProjectionIcon } from '../icons/PortfolioProjectionIcon'
import { PortfolioSummaryIcon } from '../icons/PortfolioSummaryIcon'
import { RealProfitabilityIcon } from '../icons/RealProfitabilityIcon'
import { RiskXReturnIcon } from '../icons/RiskXReturnIcon'
import { StyledAside } from './styles'

export function Aside() {
  return (
    <StyledAside>
      <AsideMenuItem
        label="Resumo Da Carteira"
        href="#"
        icon={<PortfolioSummaryIcon />}
      />
      <AsideMenuItem label="Meus Produtos" href="#" icon={<MyProductsIcon />} />
      <AsideMenuItem
        label="Meus Proventos"
        href="#"
        icon={<MyEarningsIcon />}
      />
      <AsideMenuItem
        label="Classe de ativos"
        href="/"
        icon={<AssetClassIcon />}
      >
        <AsideSubMenuItem label="Ação" href="#" />
        <AsideSubMenuItem label="Fundo" href="#" />
        <AsideSubMenuItem label="Fundo Imobiliário" href="#" />
        <AsideSubMenuItem label="Fundo Renda Fixa" href="/" />
      </AsideMenuItem>
      <AsideMenuItem
        label="Rentabilidade Real"
        href="#"
        icon={<RealProfitabilityIcon />}
      />
      <AsideMenuItem
        label="Projeção da Carteira"
        href="#"
        icon={<PortfolioProjectionIcon />}
      />
      <AsideMenuItem
        label="Risco x Retorno"
        href="#"
        icon={<RiskXReturnIcon />}
      />
      <AsideMenuItem
        label="Cobertura do FGC"
        href="#"
        icon={<FGCCoverageIcon />}
      />
    </StyledAside>
  )
}
