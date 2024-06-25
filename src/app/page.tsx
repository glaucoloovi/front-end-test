import { AsideMenuItem } from '@/components/AsideMenuItem'
import { AsideSubMenuItem } from '@/components/AsideSubMenuItem'
import { AssetClassIcon } from '@/components/icons/AssetClassIcon'
import { Wrapper } from './styles'

export default function Page() {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
