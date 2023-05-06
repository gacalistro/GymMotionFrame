import * as Assets from "../assets";

export function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="w-5/6 mx-auto gap-16 lg:flex">
        <div className="mt-16 basis-2/5">
          <div>
            <img alt="logo" src={Assets.Logo} />
            <p className="mt-5">
              Lorem vitae ut augue auctor faucibus eget eget ut libero.
              Elementum purus et arcu massa dictum condimentum. Augue
              scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.
            </p>
            <span className="text-sm">© Evogym All Rights Reserved</span>
          </div>

          <div className="mt-5">
            <span className="font-bold">Contact Us</span>
            <div className="flex flex-col">
              <span>Tempus metus mattis risus volutpat egestas.</span>
              <span>(333) 425-6825</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
