import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
const styles = {
  width: 240,
  display: "inline-table",
  marginRight: 10,
};
interface SidebarProps {
  appearance: any;
  openKeys: any;
  expanded: any;
  onOpenChange: any;
  onExpand: any;
}

export const Sidebar = ({
  appearance,
  openKeys,
  expanded,
  onOpenChange,
  onExpand,
}: SidebarProps) => {
  return (
    <>
      <div style={styles}>
        <Sidenav
          appearance={appearance}
          expanded={expanded}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<GroupIcon />}>
                User Group
              </Nav.Item>
              <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Custom Action">
                  <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
          <Sidenav.Toggle onToggle={onExpand} />
        </Sidenav>
      </div>
    </>
  );
};
