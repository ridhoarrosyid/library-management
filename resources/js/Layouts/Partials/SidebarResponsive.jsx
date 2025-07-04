import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLinkResponsive from '@/Components/NavLinkResponsive';
import IconBooks from '@/Components/icons/IconBooks';
import IconBuildingCommunity from '@/Components/icons/IconBuildingCommunity';
import IconCategory from '@/Components/icons/IconCategory';
import IconChartDots2 from '@/Components/icons/IconChartDots2';
import IconCircleKey from '@/Components/icons/IconCircleKey';
import IconCreditCardPay from '@/Components/icons/IconCreditCardPay';
import IconCreditCardRefund from '@/Components/icons/IconCreditCardRefund';
import IconDashboard from '@/Components/icons/IconDashboard';
import IconKeyframe from '@/Components/icons/IconKeyframe';
import IconLayoutKanban from '@/Components/icons/IconLayoutKanban';
import IconLogout from '@/Components/icons/IconLogout';
import IconMoneybag from '@/Components/icons/IconMoneybag';
import IconRoute from '@/Components/icons/IconRoute';
import IconSettingsExclamation from '@/Components/icons/IconSettingsExclamation';
import IconStack3 from '@/Components/icons/IconStack3';
import IconUser from '@/Components/icons/IconUser';
import IconUsersGroup from '@/Components/icons/IconUsersGroup';
import IconVersions from '@/Components/icons/IconVersions';

export default function SidebarResponsive({ url, auth }) {
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <ApplicationLogo />
      <nav className="grid items-start text-sm font-semibold lg:p-4">
        <div className="px-3 py-2 text-sm font-semibold text-foreground">Dashboard</div>
        <NavLinkResponsive
          active={url.startsWith('/dashboard')}
          url={route('dashboard')}
          title={'Dashboard'}
          icon={IconDashboard}
        />
        <div className="px-3 py-2 text-sm font-semibold text-foreground">Statistik</div>
        <NavLinkResponsive url="#" title={'Statistik Peminjaman'} icon={IconChartDots2} />
        <NavLinkResponsive url="#" title={'Laporan Denda'} icon={IconMoneybag} />
        <NavLinkResponsive url="#" title={'Laporan Stok Buku'} icon={IconStack3} />
        <div className="px-3 py-2 text-sm font-semibold text-foreground">Master</div>
        <NavLinkResponsive
          url={route('admin.categories.index')}
          active={url.startsWith('/admin/categories')}
          title={'Kategori'}
          icon={IconCategory}
        />
        <NavLinkResponsive
          url={route('admin.publishers.index')}
          active={url.startsWith('/admin/publishers')}
          title={'Penerbit'}
          icon={IconBuildingCommunity}
        />
        <NavLinkResponsive url="#" title={'Buku'} icon={IconBooks} />
        <NavLinkResponsive url="#" title={'Pengguna'} icon={IconUsersGroup} />
        <NavLinkResponsive url="#" title={'Pengaturan Denda'} icon={IconSettingsExclamation} />
        <div className="px-3 py-2 text-sm font-semibold text-foreground">Peran dan Izin</div>
        <NavLinkResponsive url="#" title={'Peran'} icon={IconCircleKey} />
        <NavLinkResponsive url="#" title={'Izin'} icon={IconVersions} />
        <NavLinkResponsive url="#" title={'Tetapkan Peran'} icon={IconKeyframe} />
        <NavLinkResponsive url="#" title={'Tetapkan Izin'} icon={IconLayoutKanban} />
        <NavLinkResponsive url="#" title={'Akses Rute'} icon={IconRoute} />
        <div className="px-3 py-2 text-sm font-semibold text-foreground">Transaksi</div>
        <NavLinkResponsive url="#" title={'Peminjaman'} icon={IconCreditCardPay} />
        <NavLinkResponsive url="#" title={'Pengembalian'} icon={IconCreditCardRefund} />
        <div className="px-3 py-2 text-sm font-semibold text-foreground">Lainnya</div>
        <NavLinkResponsive url={route('profile.edit')} title={'Profile'} icon={IconUser} />
        <NavLinkResponsive
          url={route('logout')}
          title={'Logout'}
          icon={IconLogout}
          method="post"
          as="button"
          className="w-full"
        />
      </nav>
    </nav>
  );
}
